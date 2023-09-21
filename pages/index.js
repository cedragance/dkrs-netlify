import Safe from "react-safe"

export default function Home() {
  return (
    <Safe.script>{
      'window.location.replace("/Dragan_Krstic_resume.pdf");'
      }
    </Safe.script>
  )
}
