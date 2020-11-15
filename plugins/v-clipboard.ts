import Vue from 'vue'

const clipboard = {
  oInnerHtml: '',
  value: {
    v: undefined,
    duration: 0,
    ok: undefined,
    end: undefined,
  } as any,
  action(el: any) {
    const { v, duration = 0, ok, end } = clipboard.value
    const input = document.createElement('input')
    input.setAttribute('value', v)
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    ok && ok()
    el.innerHTML = 'done'
    if (duration > 0) {
      const _timer = setTimeout(() => {
        el.innerHTML = clipboard.oInnerHtml
        end && end()
        clearTimeout(_timer)
      }, duration)
    }
  },
  // Execute after dom is generated
  inserted: (el: any) => {
    clipboard.oInnerHtml = el.innerHTML
    el.addEventListener('click', () => {
      clipboard.action(el)
    })
  },
  // Execute after dom is update
  update: (el: any, binding: any) => {
    const { value } = binding
    clipboard.value = value
  },
}

Vue.directive('clipboard', clipboard)
