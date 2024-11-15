import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Table, Typography, Spin } from 'antd';
import { fetchCountries } from '../services/apiServices';
import { Link } from 'react-router-dom';

const { Title } = Typography;

type Country = {
    countryCode: string;
    name: string;
};

export const Countries: React.FC = () => {
    const { data, isLoading, isError } = useQuery<Country[]>({
        queryKey: ['countries'],
        queryFn: fetchCountries,
    });

    if (isLoading) {
        return <Spin tip="Loading countries..." />;
    }

    if (isError) {
        return <p>Failed to fetch countries. Please try again later.</p>;
    }

    const columns = [
        {
            title: 'Country Name',
            dataIndex: 'name',
            key: 'name',
            render: (text: string, record: Country) => (
                <Link to={`/country/${record.countryCode}`}>{text}</Link>
            ),
        },
        {
            title: 'Country Code',
            dataIndex: 'countryCode',
            key: 'countryCode',
        },
    ];

    return (
        <div style={{padding:'2rem'}}>
            <Title level={2}>Country List</Title>
            <Table
                dataSource={data}
                columns={columns}
                rowKey={(record) => record.countryCode}
                pagination={{ pageSize: 10 }}
            />
        </div>
    );
};
