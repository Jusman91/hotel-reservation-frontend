import { ConfigProvider, Button as AntdBtn } from "antd";
import {twMerge as tm} from 'tailwind-merge';
import type { ButtonProps } from "antd";


const Button = ({children, className, ...props}: ButtonProps) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorBgContainer: 'transparent',
          }
        }
      }}
    >

      <AntdBtn
        className={tm(
          'flex items-center justify-center font-semibold',
          className,
        )}
        {...props}>
          {children}
        </AntdBtn>
    </ConfigProvider>
  )
}

export default Button