import { Button, ConfigProvider, Input, Space, Typography } from 'antd';

function App() {
	return (
		<>
		<ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: '#011dda',
						colorBgContainerDisabled: '#11aadd',
						// colorError: '#33ddaa',
            algorithm: true, // Enable algorithm
            
          },
          Input: {
            colorPrimary: '#eb2f96',
						// colorError: '#aacd00',

            algorithm: true, // Enable algorithm
          }
        },
      }}
    >
      <Space>
        <div style={{ fontSize: 14 }}>Enable algorithm: </div>
        <Input placeholder="Please Input"  status='error'/>
        <Button type="primary" danger={true}>Submit</Button>
        <div>
      <Typography.Title level={5}>Exceed Max</Typography.Title>
      <Input
        count={{
          show: true,
          max: 10,
        }}
        defaultValue="Hello, antd!"
      />
    </div>
      </Space>
    </ConfigProvider>
		</>
	);
}

export default App;
