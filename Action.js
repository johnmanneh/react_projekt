export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters ={
 SHOW_ALL = 'SHOW_ALL',
 SHOW_COMPLETED = 'SHOW_COMPLETED',
 SHOW_ACTIVE = 'SHOW_ACTIVE'
}

export function add_todo(text){
  return {
    type:ADD_TODO,
    text
  }
}

export function toggle_todo(index){
  return{
    type: TOGGLE_TODO,
    index
  }
}

export function set_visibility_filter(filter){
  return{
    type:SET_VISIBILITY_FILTER,
    filter
  }
}