import React, {useState} from 'react'
import {View, ScrollView, Text, RefreshControl, RefreshControlBase} from 'react-native'

export default function (){
    
    const [atualizando, setAtualizando]=useState(false)
    const aoAtualizar=()=>{
        setAtualizando(true)
        setTimeout(()=>{setAtualizando(false)}, 1000)
    }

    return (
        <View style={{flex:1}}>
            <ScrollView 
                style={{backgroundColor:'#333', padding:15}}
                refreshControl={
                    <RefreshControl
                        refreshing={atualizando}
                        onRefresh={aoAtualizar}
                    />
                }
            >
                <Text style={{color:'#eee'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis ante quis massa cursus dapibus. Duis interdum massa nec mauris auctor, et gravida elit ullamcorper. Pellentesque tincidunt pretium sem, eu dignissim nulla luctus sit amet. Vestibulum vitae orci ornare, molestie elit a, accumsan velit. Donec sed condimentum dui, et rutrum sapien. Quisque ullamcorper orci ac fermentum ultrices. Sed in aliquet quam. Mauris ut odio leo. Curabitur tincidunt viverra efficitur. Morbi ut massa eu justo scelerisque tempus.
                Praesent non scelerisque tortor, sit amet condimentum dolor. Pellentesque arcu tellus, sagittis non porta vel, commodo quis ex. In hac habitasse platea dictumst. Morbi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis ante quis massa cursus dapibus. Duis interdum massa nec mauris auctor, et gravida elit ullamcorper. Pellentesque tincidunt pretium sem, eu dignissim nulla luctus sit amet. Vestibulum vitae orci ornare, molestie elit a, accumsan velit. Donec sed condimentum dui, et rutrum sapien. Quisque ullamcorper orci ac fermentum ultrices. Sed in aliquet quam. Mauris ut odio leo. Curabitur tincidunt viverra efficitur. Morbi ut massa eu justo scelerisque tempus.
                Praesent non scelerisque tortor, sit amet condimentum dolor. Pellentesque arcu tellus, sagittis non porta vel, commodo quis ex. In hac habitasse platea dictumst. Morbi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis ante quis massa cursus dapibus. Duis interdum massa nec mauris auctor, et gravida elit ullamcorper. Pellentesque tincidunt pretium sem, eu dignissim nulla luctus sit amet. Vestibulum vitae orci ornare, molestie elit a, accumsan velit. Donec sed condimentum dui, et rutrum sapien. Quisque ullamcorper orci ac fermentum ultrices. Sed in aliquet quam. Mauris ut odio leo. Curabitur tincidunt viverra efficitur. Morbi ut massa eu justo scelerisque tempus.
                Praesent non scelerisque tortor, sit amet condimentum dolor. Pellentesque arcu tellus, sagittis non porta vel, commodo quis ex. In hac habitasse platea dictumst. Morbi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis ante quis massa cursus dapibus. Duis interdum massa nec mauris auctor, et gravida elit ullamcorper. Pellentesque tincidunt pretium sem, eu dignissim nulla luctus sit amet. Vestibulum vitae orci ornare, molestie elit a, accumsan velit. Donec sed condimentum dui, et rutrum sapien. Quisque ullamcorper orci ac fermentum ultrices. Sed in aliquet quam. Mauris ut odio leo. Curabitur tincidunt viverra efficitur. Morbi ut massa eu justo scelerisque tempus.
                Praesent non scelerisque tortor, sit amet condimentum dolor. Pellentesque arcu tellus, sagittis non porta vel, commodo quis ex. In hac habitasse platea dictumst. Morbi.
                </Text>
            </ScrollView>
        </View>
    )
}