import { Button, Pagination, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
import { NoticeTableDataType } from "../models/notice.dto";

const Notice = () => {

    const initNoticeList = [
        {title: 'title1', date: '2023-01-01'}
    ]

    // 공지사항 목록
    const [noticeList, setNoticeList] = useState(initNoticeList);
    
    // table columns
    const columns : ColumnsType<NoticeTableDataType> = [
        {title: '제목',
        width: '70%',
        dataIndex: 'title',
        align: 'center'},
        {title: '작성일자',
        width: '30%',
        dataIndex: 'date',
        align: 'center'}
    ]

    return (<>
    <h1>Notice Page</h1> 
    <div style={{display: 'flex', marginBottom: '5px'}}>
        <Button style={{marginLeft: 'auto'}} type="primary" htmlType="submit" onClick={()=>{alert('make new notice')}}>
            NEW
        </Button>
    </div>
    <Table
    columns={columns}
    dataSource={noticeList}
    pagination={false}
     />
    <Pagination />
    </>)
}

export default Notice;