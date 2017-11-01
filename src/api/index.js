/**
 * Created by ldm on 2017/11/1.
 */
import service from './service'

const api = {
  getTest (payload) {
    return service.post('/api/test', payload)
  }
}

export default api
