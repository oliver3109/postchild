import Vue from 'vue'

/**
 * example:
 * v-clipboard="{ v: 'copy str', duration: 3000, ok: () => {}, end: () => {} }"
 */

const clipboard = {
  oInnerHtml: '',
  value: {
    v: undefined,
    duration: 0,
    ok: undefined,
    end: undefined,
  },
  action(el) {
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
        end()
        clearTimeout(_timer)
      }, duration)
    }
  },
  // Execute after dom is generated
  inserted: (el) => {
    clipboard.oInnerHtml = el.innerHTML
    el.addEventListener('click', () => {
      clipboard.action(el)
    })
  },
  // Execute after dom is update
  update: (el, binding) => {
    const { value } = binding
    clipboard.value = value
  },
}

Vue.directive('clipboard', clipboard)
