// import dependencies
import React from 'react';

// import components ;
import LeadsDataPage from './leads-data.component';
import LeadsKanbanPage from './leads-kanban.component';
import {Tabs} from 'antd';

// import styling 
import './leads.styles.scss';



const LeadsPage = () => {

    function callback(key) {
    }

    const { TabPane } = Tabs;
    return <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Kanban Management" key="1">
        <LeadsKanbanPage />
      </TabPane>
      <TabPane tab="Leads Management" key="2">
        <LeadsDataPage />
      </TabPane>
  </Tabs>
};

export default LeadsPage;
