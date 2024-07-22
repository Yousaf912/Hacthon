import style from'./Button.module.css'

export default function Button(props:{txt:string}) {
    const {txt}=props
  return (
    <button className={`${style.btn1}`}>{txt}</button>
  )
}
