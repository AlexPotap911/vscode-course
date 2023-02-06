const getUser = async () => {
  try {
    const res = await fetch('vk.com')
    const date = awaist res.json()
  } catch (e) {
    console.log(e)
  }
}

getUser()