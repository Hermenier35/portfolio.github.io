import React from 'react';
import { Timeline } from 'antd';
import '../style/FormationComp.css'
import { ConfigProvider} from 'antd';

const Formation: React.FC = () => (

    <ConfigProvider
    theme={{
      components:{
        Timeline : {
          tailColor: 'rgba(255,255,255,0.5)',
        }
      }
    }}>
 
  <Timeline
    
    mode='alternate'
    items={[
      {
        color: 'green',
        children: <> <p>Master 1 Ingénierie Logiciel <br /> 2023</p></>
      },
      {
        color: 'yellow',
        children: <> <p>Licence 3 informatique 2022</p></>
      },
      {
        color: 'red',
        children: <> <p>Licence 2 informatique 2021</p></>
      },
      {
        children: <> <p>Licence 1 informatique 2020</p></>
      },
    ]}
  />
   </ConfigProvider>
);

export default Formation;