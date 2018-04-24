import * as express from 'express';
import { ExpressJSVideoHelper } from 'majuro';
import * as path from 'path';

const app = express();

app.route('/express-js-video-helper')
    .get((request: express.Request, response: express.Response) => {
        const expressJSVideoHelper: ExpressJSVideoHelper = new ExpressJSVideoHelper(
            path.join(__dirname, '..', 'assets'),
            1800000,
        );

        expressJSVideoHelper.send('big_buck_bunny.mp4', request, response);
    });

app.listen(process.env.PORT || 3000, () => {

});
