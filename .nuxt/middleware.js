const middleware = {}

middleware['admin'] = require('../middleware/admin.js')
middleware['admin'] = middleware['admin'].default || middleware['admin']

middleware['authenticated'] = require('../middleware/authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['guest'] = require('../middleware/guest.js')
middleware['guest'] = middleware['guest'].default || middleware['guest']

middleware['staff'] = require('../middleware/staff.js')
middleware['staff'] = middleware['staff'].default || middleware['staff']

export default middleware
