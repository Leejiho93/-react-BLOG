import React from 'react';
import { Layout, Row, Col, Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import ProfileTop from './ProfileTop';
import { useSelector } from 'react-redux';

const { Header, Content, Footer, Sider } = Layout;

const AppLayout = ({ children }) => {
    const onClickMenu = () => {

    }

    const { me } = useSelector(state => state.user);

    return (
        <>
            {/* <Layout>
                <Sider
                    style={{
                        overflow: 'auto',
                        position: 'fixed',
                        left: 0,
                    }}
                >
                    <Menu theme="white" mode="inline">
                        <Menu.Item key="1">
                            about
                    </Menu.Item>
                        <Menu.Item key="2">
                            study
                    </Menu.Item>
                        <Menu.Item key="3">
                            cook
                    </Menu.Item>
                        <Menu.Item key="4">
                            free
                    </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: 'white' }} >
                        <Link href="/">
                            <a>
                                <img
                                    src="/logo300.png" alt="EASYHO Blog" />
                            </a>
                        </Link>

                        {me ?
                            <ProfileTop />
                            :
                            <>
                                <Link href="/login"><a> 로그인 </a></Link>
                                <Link href="/signup"><a> 회원가입 </a></Link>
                            </>
                        }
                    </Header>
                    <Content>
                        content
                </Content>
                    <Footer>

                    </Footer>
                </Layout>
            </Layout> */}
            <div style={{ 
                display: 'grid',
                gridTemplateColumns: '1fr 2fr 1fr',
                gridTemplateRows: '200px 400px 1fr',
                alignItems: 'center'
                }}>
                <div style={{ gridColumnStart: 2, gridColumnEnd: 3, gridRowStart: 1, gridRowEnd: 2,  display: 'block',
                                    marginLeft: 'auto',
                                    marginRight: 'auto'}}>
                    <Link href="/">
                        <a>
                            <img
                                src="/logo300.png" alt="EASYHO Blog" />
                        </a>
                    </Link>
                </div>
                <div style={{ gridColumnStart: 3, gridColumnEnd: 4, gridRowStart: 1, gridRowEnd: 2  }}>
                {me ?
                        <ProfileTop />
                        :
                        <div style={{  }}>
                            <Link href="/login"><a> 로그인 </a></Link>
                            <Link href="/signup"><a> 회원가입 </a></Link>
                        </div>
                    }
                </div>
                <div style={ {gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 2, gridRowEnd: 3, display: 'block',
                                    marginLeft: 'auto',
                                    marginRight: 'auto'  }}>
                        <div  style={{ marginTop: 100 }}>
                            <Link href="/about"><a>about</a></Link>
                        </div>
                        <div  style={{ marginTop: 100 }}>
                            <Link href="/study"><a>study</a></Link>
                        </div>
                        <div  style={{ marginTop: 100 }}>
                            <Link href="/cook"><a>cook</a></Link>
                        </div>
                        <div  style={{ marginTop: 100 }}>
                            <Link href="/free"><a>free</a></Link>
                        </div>
                    </div>
                <div style={{ gridColumnStart: 2, gridColumnEnd: 3, gridRowStart: 2, gridRowEnd: 4, width: '600px',
                                    marginLeft: 'auto',
                                    marginRight: 'auto'}}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default AppLayout;