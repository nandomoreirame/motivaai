export default function ({ $axios, redirect }) {
  $axios.onRequest((req) => {
    console.log('onRequest...')
    console.log(req)
  })

  $axios.onResponse(({ data }) => {
    console.log('onResponse...')
    console.log(data)
  })

  $axios.onError((error) => {
    if (error.response.status === 500) {
      redirect('/500')
    }
  })
}
