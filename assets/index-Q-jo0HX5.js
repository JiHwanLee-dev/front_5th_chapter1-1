(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const n of l)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(l){const n={};return l.integrity&&(n.integrity=l.integrity),l.referrerPolicy&&(n.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?n.credentials="include":l.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(l){if(l.ep)return;l.ep=!0;const n=e(l);fetch(l.href,n)}})();const f=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/login" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`,m=()=>{const t=o();function o(){return JSON.parse(localStorage.getItem("user"))!==null}const e=window.location.pathname,s=window.location.hash;return console.log(e),console.log(s),`
    <div class="max-w-md w-full">
        <header class="bg-blue-600 text-white p-4 sticky top-0">
          <h1 class="text-2xl font-bold">항해플러스</h1>
        </header>
        <nav class="bg-white shadow-md p-2 sticky top-14">
          <ul class="flex justify-around">
            <li><a href="/" class="${e==="/"||s=="#/"?"text-blue-600 font-bold":"text-gray-600"}">홈</a></li>
            </li>
            ${t?`<li><a href="/profile" class="${e==="/profile"||s=="#/profile"?"text-blue-600 font-bold":"text-gray-600"}">프로필</a></li>
                <li><a href="/login" id='logout' class="${e==="/login"||s=="#/login"?"text-blue-600 font-bold":"text-gray-600"}">로그아웃</a></li>
              `:`<li><a href="/login" class="${e==="/login"||s=="#/login"?"text-blue-600 font-bold":"text-gray-600"}">로그인</a></li>`}
            
         
          </ul>
        </nav>
  `},b=()=>`
      <footer class="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 항해플러스. All rights reserved.</p>
      </footer>
`,p=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
      ${m()}
      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>

        <div class="space-y-4">

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">홍길동</p>
                <p class="text-sm text-gray-500">5분 전</p>
              </div>
            </div>
            <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">김철수</p>
                <p class="text-sm text-gray-500">15분 전</p>
              </div>
            </div>
            <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">이영희</p>
                <p class="text-sm text-gray-500">30분 전</p>
              </div>
            </div>
            <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">박민수</p>
                <p class="text-sm text-gray-500">1시간 전</p>
              </div>
            </div>
            <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">정수연</p>
                <p class="text-sm text-gray-500">2시간 전</p>
              </div>
            </div>
            <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>
        </div>
      </main>
      ${b()}
      
    </div>
  </div>
`,h=()=>`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
        <form id="login-form">
          <div class="mb-4">
            <input type="text" id="username" name="username" placeholder="사용자 이름" class="w-full p-2 border rounded">
          </div>
          <div class="mb-6">
            <input type="password" id="password" name="password" placeholder="비밀번호" class="w-full p-2 border rounded">
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
        </form>
        <div class="mt-4 text-center">
          <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
        </div>
        <hr class="my-6">
        <div class="text-center">
          <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
        </div>
      </div>
    </main>
  `,v=()=>{const t=m(),o=JSON.parse(localStorage.getItem("user"));let e,s,l;return o!==null&&(e=o.username,s=o.email,l=o.bio),`
    <div id="root">
      <div class="bg-gray-100 min-h-screen flex justify-center">
        <div class="max-w-md w-full">
          ${t}
          <main class="p-4">
            <div class="bg-white p-8 rounded-lg shadow-md">
              <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
                내 프로필
              </h2>
              <form id="profile-form">
                <div class="mb-4">
                  <label
                    for="username"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >사용자 이름</label
                  >
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value="${e}"
                    class="w-full p-2 border rounded"
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="email"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >이메일</label
                  >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value="${s}"
                    class="w-full p-2 border rounded"
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="bio"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >자기소개</label
                  >
                  <textarea
                    id="bio"
                    name="bio"
                    rows="4"
                    class="w-full p-2 border rounded"
                  >${l}</textarea>
                </div>
                <button
                  type="submit"
                  class="w-full bg-blue-600 text-white p-2 rounded font-bold"
                >
                  프로필 업데이트
                </button>
              </form>
            </div>
          </main>
  
          ${b()}
        </div>
      </div>
    </div>
  `};console.log("나는 router.js야");const a={getCurrentPath:()=>window.location.pathname.includes("index.hash.html")||window.location.hash!==""?window.location.hash.slice(1)||"/":window.location.pathname,navigate:t=>{console.log("router - navigate"),window.location.pathname.includes("index.hash.html")||window.location.hash!==""?window.location.hash=t:window.history.pushState({},"",t)}},i="/front_5th_chapter1-1",g={[`${i}/`]:p,[`${i}/login`]:h,[`${i}/profile`]:v},u=t=>(console.log(`Redirecting to ${t}`),a.navigate(t),g[t]()),x=t=>{console.log("routes - handleRouting");const o=JSON.parse(localStorage.getItem("user"));let e;if(o===null&&t==="/profile")return console.log("Unauthorized access to profile, redirecting to login"),u("/login");if(o!==null&&t==="/login")return console.log("Already logged in, redirecting to home"),u("/");if(e=g[t],e)return e()};console.log(a.getCurrentPath());function d(t){a.navigate(t),c()}function w(){localStorage.clear()}window.addEventListener("popstate",()=>{c()});const c=()=>{const t=a.getCurrentPath(),o=x(t);o===void 0?document.getElementById("root").innerHTML=`${f()}`:document.getElementById("root").innerHTML=o};c();document.body.addEventListener("click",t=>{if(console.log("addEventListener click"),t.target.type!=="submit"&&(t.preventDefault(),(t.target.closest("nav")||t.target.closest("a"))&&t.target.href!==void 0)){const e=new URL(t.target.href).pathname;t.target.id==="logout"&&w(),t.target.tagName==="A"&&document.querySelectorAll("nav ul li a").forEach(l=>{l.classList.add("bg-blue")}),d(e)}});document.body.addEventListener("submit",t=>{if(t.preventDefault(),t.target.id==="login-form"){const o=new FormData(t.target),e={};e.username=o.get("username"),e.email="",e.bio="",localStorage.setItem("user",JSON.stringify(e)),d("/profile")}else if(t.target.id==="profile-form"){const o=JSON.parse(localStorage.getItem("user")),e=new FormData(t.target);e&&(o.email=e.get("email"),o.bio=e.get("bio")),localStorage.setItem("user",JSON.stringify(o)),alert("프로필 정보가 수정되었습니다. "),d("/profile")}});
