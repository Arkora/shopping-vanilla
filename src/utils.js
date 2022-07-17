export const parseRequestUrl = () => {
    const url = document.location.pathname
    console.log(url)
    const request = url.split('/')
    return {
      resource: request[1]      
    }
  }

export const rerender = async (page) => {
  const  main = document.getElementById('main-container');
  main.innerHTML = await page.render()
  await page.after_render()
  }