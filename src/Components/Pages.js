import React from 'react'
import './Pages.css'
export default function Pages(props) {
    const pageNumber = getPageNumber(props);
    const minPage = getMinPage(props);
    const maxPage = getMaxPage(minPage,props,pageNumber)
    console.log(minPage,maxPage)
    const spanDom = [];
    for (let i = minPage; i < maxPage; i++ ){
        spanDom.push(<span key={i} onClick={()=>{toPage(i,props)}} className={ props.current === i ? 'item active' : 'item'}>{i}</span>)
    }
    
    return (
        <>
            <span onClick={()=>{toPage(1,props)}} className={props.current === 1 ? 'item disable' : 'item'}>首页</span>
            <span onClick={()=>{toPage(props.current - 1 <= 1 ? 1 : props.current - 1,props)}} className={props.current === 1 ? 'item disable' : 'item'}>上一页</span>
            {/* 中间数字页码 */}
            {spanDom}
            <span onClick={()=>{toPage(props.current + 1 >= pageNumber ? pageNumber : props.current + 1,props)}} className={props.current === pageNumber ? 'item disable' : 'item'}>下一页</span>
            <span onClick={()=>{toPage(pageNumber,props)}} className={props.current === pageNumber ? 'item disable' : 'item'}>尾页</span>
            <span>{props.current}</span>
            /
            <span>{pageNumber}</span>
        </>
    )
}

/**
 * 跳转至某一页
 * @param {*} target 跳转到的页码 
 */
function toPage (target,props) {
    if(props.current === target) return
    props.onChangePage && props.onChangePage(target);
}
/**
 * H获取最大页码
 * @param {*} min 最小页码
 * @param {*} props 所有属性
 * @param {*} page 总的页码数量
 * @returns 
 */
function getMaxPage (min,props,page) {
    let max = min + props.panleNumber - 1;
    if (max > page) {
        max = page
    };
    return max;
}
/**
 * 获取最小页码
 * @param {*} props 
 * @returns 
 */
function getMinPage (props) {
   let min = props.current - Math.floor(props.panleNumber / 2);
   if (min < 1) {
       min = 1;
   };
   return min;
}
/**
 * 获取总的页码数量
 * @param {*} props 所有属性 
 */
function getPageNumber(props) {
    return Math.ceil(props.total / props.limit)
}