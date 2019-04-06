export function login() {
  return "login successfully";
}

// 这是个没被使用的函数 会被tree shaking
export function redundantFunction() {
  return "this is a redundant function";
}
