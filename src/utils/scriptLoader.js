export function loadScript(url) {
  const script = document.createElement("script");
  script.src = url;
  script.type = "text/javascript";
  script.async = true;
  document.head.appendChild(script);
}

export function asyncLoadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.type = "text/javascript";
    script.async = true;

    // 스크립트 로드가 완료되면 Promise를 resolve
    script.onload = () => {
      resolve();
    };

    // 스크립트 로드 실패 시 Promise를 reject
    script.onerror = () => {
      reject(new Error(`Failed to load script: ${url}`));
    };

    document.body.appendChild(script);
  });
}
