// also don't forget to `npm i -D @types/node`, so __dirname won't complain
import * as path from 'path'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
})