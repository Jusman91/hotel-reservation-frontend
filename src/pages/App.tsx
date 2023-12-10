import Routes from '@/routes';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<ConfigProvider
      theme={{
        token: {
          colorPrimary: '#0d9488',
          colorInfo: '#0d9488',
          colorError: '#f52629',
          fontSize: 16,
          borderRadius: 12,
          borderRadiusLG: 24,
          // colorPrimaryBg: '#0d9488',
            // colorPrimaryTextHover: '#0d9488',
        },
        components: {
          Menu: {
            itemHoverColor: '#0d9488'
          }
      }
      }}
    >
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </ConfigProvider>
	);
}

export default App;