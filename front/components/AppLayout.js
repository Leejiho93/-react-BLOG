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






            {/* <Row justify="center" style={{flexWrap: 'nowrap', justifyContent: 'spaceEvenly'}}>
                <Col 
                md={12} xs={24}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                >
                    <div style={{ width: '120px', height: '31px'}}>
                        <Link href="/">
                            <a>
                                <img 
                                style={{ display: 'block', verticalAlign: 'middle' }}
                                src="/logo300.png" alt="EASYHO Blog" />
                            </a>
                        </Link>
                    </div>
                    <div>
                    {me ?
                        <ProfileTop />
                        :
                        <div style={{  }}>
                            <Link href="/login"><a> 로그인 </a></Link>
                            <Link href="/signup"><a> 회원가입 </a></Link>
                        </div>
                    }
                    </div>
                  
                </Col>
            </Row> */}

            {/* <Row style={{ flexDirection: 'column'}}>
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
                md={12} xs={24}
                >
                    {children}
                </Col>

                <Col md={6} xs={24}>

                </Col>
            </Row> */}
        </>
    )
}

export default AppLayout;