import {Roboto}from 'next/font/google'
const roboto= Roboto({
    weight:'200',
    subsets:['latin'],
    display:'swap'
})
export default function Fonts(){
    return(
        <h1 className={roboto.className}>Hello font</h1>
    )
}