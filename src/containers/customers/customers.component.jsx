// import dependencies
import React from 'react';

// import components ;
import CustomersAgentPage from './customers-agent.component';
import CustomersCompanyPage from './customers-company.component';
import {Tabs} from 'antd';

// import styling 
import './customers.styles.scss';



const LeadsPage = () => {

    function callback(key) {
    }

    const { TabPane } = Tabs;
    return <Tabs defaultActiveKey="1" onChange={callback} size="large">
      <TabPane tab="Agent Management" key="1"> 
        <CustomersAgentPage />
      </TabPane>
      <TabPane tab="Company Management" key="2">
        <CustomersCompanyPage />
      </TabPane>
  </Tabs>
};

export default LeadsPage;
