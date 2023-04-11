import { Button, Pagination, Table } from "antd";
import React, { useState } from "react";

const Notice = () => {

    // 공지사항 목록
    const [noticeList, setNoticeList] = useState();

    return (<>
    <h1>Notice Page</h1> 
    <div style={{display: 'flex', marginBottom: '5px'}}>
        <Button style={{marginLeft: 'auto'}} type="primary" htmlType="submit" onClick={()=>{alert('make new notice')}}>
            NEW
        </Button>
    </div>
    <Table />
    <Pagination />
    </>)
}

export default Notice;