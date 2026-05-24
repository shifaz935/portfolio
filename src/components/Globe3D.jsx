import Globe from "react-globe.gl"

function Globe3D() {

  return (

    <div className="h-[500px]">

      <Globe

        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"

        backgroundColor="rgba(0,0,0,0)"

      />

    </div>

  )
}

export default Globe3D