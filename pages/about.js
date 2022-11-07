import SingleLayout from "../layouts/single"

export default function Home() {
  return (
    <div>
      <main>
        <div>
          Hello about
        </div>
      </main>
    </div>
  )
}

Home.getLayout = function getLayoutPage(page) {
  return <SingleLayout>{page}</SingleLayout>
}
