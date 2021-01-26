// import dependencies
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'

// import components ;

// import actions 
import {getAgents} from '../../redux/customers/customers.actions';

// import styling 
import './customers.styles.scss';
import { Table } from 'antd';

const columns = [
  {
    title: 'Id Agents',
    width: 100,
    dataIndex: 'agent_id',
    key: 'agent_id',
    fixed: 'left',
  },
  {
    title: 'Agents Name',
    width: 100,
    dataIndex: 'agent_name',
    key: 'agent_name',
  },
  {
    title: 'Column 1',
    dataIndex: 'agent_name',
    key: '1',
    width: 150,
  },
  {
    title: 'Column 2',
    dataIndex: 'agent_name',
    key: '2',
    width: 150,
  },
  {
    title: 'Column 3',
    dataIndex: 'agent_name',
    key: '3',
    width: 150,
  },
  {
    title: 'Column 4',
    dataIndex: 'agent_name',
    key: '4',
    width: 150,
  },
  {
    title: 'Column 5',
    dataIndex: 'agent_name',
    key: '5',
    width: 150,
  },
  {
    title: 'Column 6',
    dataIndex: 'agent_name',
    key: '6',
    width: 150,
  },
  {
    title: 'Column 7',
    dataIndex: 'agent_name',
    key: '7',
    width: 150,
  },
  { title: 'Column 8', dataIndex: 'agent_name', key: '8' },
  {
    title: 'Status',
    key: 'status',
    fixed: 'right',
    width: 100,
    render: () => <span>Convert to leads</span>,
  },
];

const AgentsPage = ({ history }) => {
  const dispatch = useDispatch();
  const {agents} = useSelector((state) => state.customers)

  useEffect(() => {
    dispatch(getAgents());
  }, [dispatch])

    return <Table columns={columns} dataSource={agents}    pagination={{ defaultPageSize: 10, showSizeChanger: true, total:100 ,pageSizeOptions: ['10', '20', '30']}} scroll={{ x: 1500 }} sticky />
};

export default AgentsPage;
