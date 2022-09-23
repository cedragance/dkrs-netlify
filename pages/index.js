import Safe from "react-safe"

export default function Home() {
  return (
    <Safe.script>{
      'window.location.replace("/CV_Dragan_Krstic.pdf");'
      }
    </Safe.script>
  )
}
