// import dependencies
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'

// import components ;

// import actions 
import {getLeads} from '../../redux/leads/leads.actions';

// import styling 
import './leads.styles.scss';
import { Table } from 'antd';

const columns = [
  {
    title: 'Id Leads',
    width: 100,
    dataIndex: 'leads_id',
    key: 'leads_id',
    fixed: 'left',
  },
  {
    title: 'Leads Name',
    width: 100,
    dataIndex: 'leads_name',
    key: 'leads_name',
  },
  {
    title: 'Column 1',
    dataIndex: 'leads_name',
    key: '1',
    width: 150,
  },
  {
    title: 'Column 2',
    dataIndex: 'leads_name',
    key: '2',
    width: 150,
  },
  {
    title: 'Column 3',
    dataIndex: 'leads_name',
    key: '3',
    width: 150,
  },
  {
    title: 'Column 4',
    dataIndex: 'leads_name',
    key: '4',
    width: 150,
  },
  {
    title: 'Column 5',
    dataIndex: 'leads_name',
    key: '5',
    width: 150,
  },
  {
    title: 'Column 6',
    dataIndex: 'leads_name',
    key: '6',
    width: 150,
  },
  {
    title: 'Column 7',
    dataIndex: 'leads_name',
    key: '7',
    width: 150,
  },
  { title: 'Column 8', dataIndex: 'leads_name', key: '8' },
  {
    title: 'Status',
    key: 'status',
    fixed: 'right',
    width: 100,
    render: () => <span>Cold</span>,
  },
];

const LeadsPage = ({ history }) => {
  const dispatch = useDispatch();
  const {leads } = useSelector((state) => state.leads)

  useEffect(() => {
    dispatch(getLeads());
  }, [dispatch])

    return <Table columns={columns} dataSource={leads}    pagination={{ defaultPageSize: 10, showSizeChanger: true, total:100 ,pageSizeOptions: ['10', '20', '30']}} scroll={{ x: 1500 }} sticky />
};

export default LeadsPage;
