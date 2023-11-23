export function viewWidth(){
    
    const width = window.innerWidth
    if(width < 650){
        return 1
    }else if(width < 850){
        return 2
    }else if(width < 1100){
        return 3
    } else if(width < 1350){
        return 4
    } else{return 5}
}
