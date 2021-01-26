// import dependencies
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'

// import components ;

// import actions 
import {getCompany} from '../../redux/customers/customers.actions';

// import styling 
import './customers.styles.scss';
import { Table } from 'antd';

const columns = [
  {
    title: 'Id Company',
    width: 100,
    dataIndex: 'company_id',
    key: 'company_id',
    fixed: 'left',
  },
  {
    title: 'Company Name',
    width: 100,
    dataIndex: 'company_name',
    key: 'company_name',
  },
  {
    title: 'Column 1',
    dataIndex: 'company_name',
    key: '1',
    width: 150,
  },
  {
    title: 'Column 2',
    dataIndex: 'company_name',
    key: '2',
    width: 150,
  },
  {
    title: 'Column 3',
    dataIndex: 'company_name',
    key: '3',
    width: 150,
  },
  {
    title: 'Column 4',
    dataIndex: 'company_name',
    key: '4',
    width: 150,
  },
  {
    title: 'Column 5',
    dataIndex: 'company_name',
    key: '5',
    width: 150,
  },
];

const LeadsPage = ({ history }) => {
  const dispatch = useDispatch();
  const {company} = useSelector((state) => state.customers)
  
  useEffect(() => {
    dispatch(getCompany());
  }, [dispatch])

    return <Table columns={columns} dataSource={company} pagination={{ defaultPageSize: 10, showSizeChanger: true, total:100 ,pageSizeOptions: ['10', '20', '30']}} scroll={{ x: 1500 }} sticky />
};

export default LeadsPage;
