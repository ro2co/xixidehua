import Layout from '../../layouts'

export default function AboutPage() {
  return (
    <div>
      about
    </div>
  )
}
AboutPage.getLayout = function(page) {
  return <Layout>{page}</Layout>
}
