import * as math from './_js/math.js';import * as js from './_js/js.js';import * as arr from './_js/arr.js';import * as client from './_js/client.js';import * as bytes from './_js/bytes.js';import * as str from './_js/str.js';import * as ui from './_js/ui.js';import * as dic from './_js/dic.js';import * as timer from './_js/timer.js';import * as time from './_js/time.js';import * as storage from './_js/storage.js';import * as b64 from './_js/b64.js';import * as sys from './_js/sys.js';import * as iter from './_js/iter.js';import * as domo from './_js/domo.js';import * as cryp from './_js/cryp.js';




import * as clock from  "./libdm/clock.js";

const Q =sys.$checkNull( ui.q);

const cl =sys.$checkNull( clock.mk());
clock.setWidth(cl, clock.width(cl) * 2);
clock.setHeight(cl, clock.height(cl) * 2);

const cl2 =sys.$checkNull( clock.mkChron());
clock.setWidth(cl2, clock.width(cl2) * 2);
clock.setHeight(cl2, clock.height(cl2) * 2);
Q("@body")
  .style("background-color:#407080")
  .add(Q("table")
    .att("align", "center")
    .add(Q("tr")
      .add(Q("td")
        .add(clock.wg(cl)
          .style("opacity: 0.5")))
      .add(Q("td")
        .add(clock.wg(cl2)
          .att(
            "style",
            "background:radial-gradient(#000333,#e6f6f6);" +
            "border: 1px solid rgb(110,130,150);" +
            "border-radius: 4px;"
          )))))
;

const A =sys.$checkNull( {"a": 100, "b":101});
for (const v  of sys.$forObject( A)) console.log( v);

console.log( "end");
