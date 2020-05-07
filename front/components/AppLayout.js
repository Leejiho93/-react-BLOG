import React from 'react';
import { Row, Col, Menu, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';
import ProfileTop from './ProfileTop';
import { useSelector } from 'react-redux';

const AppLayout = ({ children }) => {
    const onClickMenu = () => {

    }

    const { me } = useSelector(state => state.user);

    return (
        <>
            <Row type="grid">
                <Col md={6} xs={24}>


                </Col>

                <Col 
                md={12} xs={24}
                style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}
                >
                    <div>
                        <Link href="/">
                            <a>
                                <img 
                                style={{ display: 'inline-block', verticalAlign: 'middle' }}
                                src="/logo300.png" alt="EASYHO Blog" />
                            </a>
                        </Link>
                    </div>
                </Col>

                <Col 
                md={6} xs={24}
                style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}
                >
                    {me ?
                        <ProfileTop />
                        :
                        <div style={{  }}>
                            <Link href="/login"><a> 로그인 </a></Link>
                            <Link href="/signup"><a> 회원가입 </a></Link>
                        </div>
                    }
                </Col>

            </Row>

            <Row>
                <Col 
                md={6} xs={24}
                style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}
                >
                    <div style={{ }}>
                        <div>
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
                </Col>

                <Col 
                md={12} xs={24} /* style={{ marginTop: 100 }} */
                // style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                >
                    {children}
                </Col>

                <Col md={6} xs={24}>

                </Col>
            </Row>
        </>
    )
}

export default AppLayout;