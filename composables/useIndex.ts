export const useIndex = () => {
  const form = reactive({
    message: '',
    placeholder: '',
  })

  const enter = () => {
    // mp.info(form.message)
  }

  return {
    form,
    enter,
  }
}
