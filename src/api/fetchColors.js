import {axiosWithAuth} from "../helpers/axiosWithAuth";

export const fetchColors = () => {
    return (
        axiosWithAuth()
        .get('/colors')
        .then((response) => {
          console.log(response)
          return response
        })
        .catch((error) => {
          console.error(error)
        })
    )
}