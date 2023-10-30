import {BookFilled, GithubOutlined} from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
const Footer: React.FC = () => {
  const defaultMessage = '程序猿-小廉出品 皖ICP备2023016104';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'GitHub',
          title: 'GitHub',
          href: 'https://github.com/LYuYang61',
          // blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/LYuYang61',
          blankTarget: true,
        },
        {
          key: 'blob',
          title: <BookFilled />,
          href: 'https://github.com/LYuYang61',
          blankTarget: true,
        },
        {
          key: 'Blob',
          title: '青梧开放API',
          href: 'https://github.com/LYuYang61',
          // blankTarget: true,
        },
        {
          key: '',
          title: '',
          href: '',
          // blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
