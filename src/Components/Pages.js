import React from 'react'
import './Pages.css'
export default function Pages(props) {
    return (
        <>
            <span className={props.current === 1 ? 'item disable' : 'item'}>首页</span>
            <span className={props.current === 1 ? 'item disable' : 'item'}>上一页</span>
            {/* 中间数字页码 */}

            <span className={props.current === 1 ? 'item disable' : 'item'}>下一页</span>
            <span className={props.current === 1 ? 'item disable' : 'item'}>尾页</span>
        </>
    )
}
/**
 * 获取总的页码数量
 * @param {*} props 所有属性 
 */
function getPageNumber (props) {
    
}