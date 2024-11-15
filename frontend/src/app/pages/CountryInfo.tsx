import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Card, Typography, Row, Col, Table, Spin } from 'antd';
import {fetchCountryInfo, fetchFlags, fetchPopulationData} from '../services/apiServices';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const { Title } = Typography;

type BorderCountry = {
    countryCode: string;
    commonName: string;
};

type PopulationHistory = {
    year: number;
    value: number;
};

export const CountryInfo: React.FC = () => {
    const { countryCode } = useParams<{ countryCode: string }>();

    const { data: countryData, isLoading: isLoadingCountryData, isError: isErrorCountryData } = useQuery(
        ['countryInfo', countryCode],
        () => fetchCountryInfo(countryCode!),
        {
            enabled: !!countryCode
        }
    );

    const { data: populationData, isLoading: isLoadingPopulationData, isError: isErrorPopulationData } = useQuery(
        ['populationData', countryData?.officialName],
        () => fetchPopulationData(),
        {
            enabled: !!countryData?.officialName,
            select: (populationData) => {
                const filteredData = populationData.data.filter((country: any) =>
                    country.country === countryData?.officialName
                );

                return filteredData.length > 0 ? filteredData[0]?.populationCounts : [];
            },
        }
    );


    const { data: flag } = useQuery(
        ['flagData', countryData.countryCode],
        () => fetchFlags(),{
            enabled: !!countryData.countryCode,
            select: (flags) => {
                return flags.data?.filter((x:any) => x.countryCode === countryData.countryCode)?.flag;
            }
        }
    );

    if (isLoadingCountryData || isLoadingPopulationData) {
        return <Spin tip="Loading country data..." />;
    }

    if (isErrorCountryData || isErrorPopulationData) {
        return <p>Failed to load data. Please try again later.</p>;
    }

    const borderCountries: BorderCountry[] = countryData?.borders || [];

    const populationHistory: PopulationHistory[] = populationData || [];
    console.log(populationHistory);
    const chartData = {
        labels: populationHistory.map(item => item.year),
        datasets: [
            {
                label: 'Population',
                data: populationHistory.map(item => item.value),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const columns = [
        {
            title: 'Border Country Name',
            dataIndex: 'commonName',
            key: 'commonName',
            render: (text: string, record: BorderCountry) => (
                <a href={`/country/${record.countryCode}`}>{text}</a>
            ),
        },
    ];

    return (
        <div>
            <Row gutter={16}>
                <Col span={24}>
                    <Card>
                        <Title level={1}>{countryData?.commonName}</Title>
                        <img src={flag} alt={countryData?.commonName} style={{ width: 100 }} />
                    </Card>
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={24}>
                    <Card title="Border Countries">
                        <Table
                            dataSource={borderCountries}
                            columns={columns}
                            rowKey="countryCode"
                            pagination={false}
                        />
                    </Card>
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={24}>
                    <Card title="Population Over Time">
                        <Bar data={chartData} />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};