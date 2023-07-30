import * as iter from './_js/iter.js';import * as str from './_js/str.js';import * as bytes from './_js/bytes.js';import * as cryp from './_js/cryp.js';import * as dic from './_js/dic.js';import * as timer from './_js/timer.js';import * as js from './_js/js.js';import * as storage from './_js/storage.js';import * as sys from './_js/sys.js';import * as math from './_js/math.js';import * as domo from './_js/domo.js';import * as ui from './_js/ui.js';import * as arr from './_js/arr.js';import * as time from './_js/time.js';import * as client from './_js/client.js';import * as b64 from './_js/b64.js';




import * as speedometer from  "./libdm/speedometer.js";

const Q =sys.$checkNull( ui.q);

const s1 =sys.$checkNull( speedometer.mk(
  0.1587, 0.8, ["#6e8296"], ["white"]
));
const s2 =sys.$checkNull( speedometer.mk(0.21, 0.15, [], []));
Q("@body")
  .style("background-color:#f0f1f2")
  .add(Q("table").att("align", "center")
    .add(Q("tr")
      .add(Q("td")
        .add(s1)
      .add(Q("td")
        .add(s2)))))
;
