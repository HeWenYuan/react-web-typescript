export class http {
  private url:string;
  private method:string;
  private data:any;
  private xhr:any;
  private cb?:Function;
  constructor (url:string, method:string, data:any, cb?:Function) {
    this.url = url;
    this.method = method;
    this.data = data;
    this.xhr = new XMLHttpRequest();
    this.cb = cb;
  }

  public request () {
    let xhr = this.xhr;
    let url = this.url;
    let method = this.method;
    let data = this.data;
    let cb = this.cb;
    if (method === "get" || method === "GET") {
      if (!this.isEmptyObject(data)) {
        url += "?";
        for (let key in data) {
          url += key + "=" + data[key] + "&";
        }
        url = url.substring(0, url.lastIndexOf("&"));
      }
      xhr.open("get", url, true);
      xhr.send(null);
      
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(xhr.responseText);
          console.log(cb);
          cb(JSON.parse(xhr.responseText));
        }
      };
      
    } else if (method === "post" || method === "POST") {

    } else {

    }
  }

  public get() {}

  public post() {}

  public del() {}

  public isEmptyObject(obj:any) {
    for (let key in obj) {
      return false;
    };
    return true;
  }
}

export function getTestData () {
  let cb = (res:any) => {
    console.log(res);
  };
  let rq = new http("/get_test_data", "get", {}, cb);

  rq.request();
}