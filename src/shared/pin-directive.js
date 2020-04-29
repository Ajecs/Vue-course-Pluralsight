// * es una custom directive

export default {
  bind: (element, binding) => { // enlaza al componente padre
    // * el parametro binding posee varias propiedades que permiten la modificación de la directiva -> args y modifiers
    // - modifiers es un objeto que contiene propiedades(modificadores) con valor true en caso de existir
    // code console.log('arg:', binding.arg, 'modifiers:', binding.modifiers)

    if(binding.arg !== 'position') return

    Object.keys(binding.modifiers).forEach(key => element.style[key] = '5px')
    // lo anterior permite dar por defecto el valor de 5px a los modificadores pasados en el template 

    element.style.position = 'absolute'
  } 
}