import * as React from 'react';
import { useEffect, useState } from 'react';
import { Text, View, Image, Button, StyleSheet, Dimensions, TouchableOpacity, FlatList, ScrollView, ImageBackground, Modal, TouchableWithoutFeedback, RefreshControl, TextInput, KeyboardAvoidingView } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const Comment = ({ navigation, route }) => {
    const [ModalComment, setModalComment] = useState(true)
    const [isicomment, setisicomment] = useState('')
    const { comment } = route.params
    console.log('comment')
    console.log(comment.post_id)
    const { username } = route.params
    const { password } = route.params
    console.log('username')
    console.log(username)
    const [Username, setUsername] = useState('')
    const [Refreshing, setRefreshing] = useState(false)
    const [Isvisible, setIsvisible] = useState(false)
    const [data, setData] = useState([]);
    const [id_post, setid_post] = useState([])
    const [showMore, setShowMore] = useState(false)
    const [Delete, setDelete] = useState()
    const [warn, setwarn] = useState(false)
    const [islike, setislike] = useState()
    const [itemlike, setitemlike] = useState([])
    const [id, setid] = useState('')
    const [like, setlike] = useState('')
    const [itemlikecadangan, setitemlikecadangan] = useState([])
    var Content = []
    const [Post, setPost] = useState(false)
    const [postorcomment, setpostorcomment] = useState(false)
    var Islike = ''
    var Data
    const [Caption, setCaption] = useState()

    const uploadComment = async () => {
        try {
            const response = await fetch('http://10.0.2.2:3000/comment/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    post_id: comment.post_id,
                    username: username,
                    comment_caption: isicomment
                })
            });
            //const json = await response.json();
            //setData(json.data);
        } catch (error) {
            console.error(error);
        }
        finally {
            setisicomment('')
            getData()
            navigation.navigate('Comment', { username: username, comment: comment })
        }
    }



    const getData = async () => {
        try {
            console.log('try')
            const response = await fetch('http://10.0.2.2:3000/posts/comment/' + comment.post_id);
            const json = await response.json();

            Content = json.data
            console.log('Content')
            console.log(Content)
            setData(Content);
            console.log('data')
            console.log(data)
            // Content = [...data]
            // console.log('content')
            // console.log(Content)


        } catch (error) {
            console.error(error);
        }

    }
    const onrefreshing = () => {
        setRefreshing(true)
        getData()
        setRefreshing(false)
    }



    useEffect(() => {
        console.log('harus pertama')
        onrefreshing();
    }, []);

    const Deletedata = async () => {
        try {
            console.log('delete')
            const response = await fetch('http://10.0.2.2:3000/delete/id/' + Delete, {
                method: 'DELETE'
            });
        } catch (error) {
            console.error(error);
        } finally {
            setIsvisible(false)
            navigation.navigate('Postingan', { username: username });
            getData()
        }
    }


    const DeletedataComment = async () => {
        try {
            console.log('delete')
            const response = await fetch('http://10.0.2.2:3000/delete/comment/' + Delete, {
                method: 'DELETE'
            });
        } catch (error) {
            console.error(error);
        } finally {
            setIsvisible(false)
            navigation.navigate('Comment', { username: username, comment: comment });
            getData()
        }
    }

    const updateData = async () => {
        try {
            console.log(id, like)
            const response = await fetch('http://10.0.2.2:3000/comment/like/' + id + '/' + like + '', {
                method: 'PUT',
            });
        } catch (error) {
            console.error(error);
        }
    }

    return (

        <View style={styles.body}>

            <Modal style={{ flex: 1 }}
                visible={warn}
                transparent={true}
            >
                <TouchableWithoutFeedback onPress={() => [setwarn(false), setIsvisible(false)]}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#45454540' }}>

                        <View style={{ height: 250, width: 300, backgroundColor: '#F9F9F9', borderRadius: 30 }}>
                            <TouchableWithoutFeedback onPress={() => { }}>
                                <View style={{ height: 180, backgroundColor: '#', justifyContent: 'center', alignItems: 'center', borderBottomColor: '#454545', borderBottomWidth: 0.2 }}>
                                    <View style={{ backgroundColor: '#', width: 240, height: 80, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 22, fontWeight: '600' }}>
                                            Delete this post?
                                        </Text>
                                    </View>
                                </View>

                            </TouchableWithoutFeedback>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <TouchableOpacity onPress={() => {
                                    Post ? (Deletedata()) : (DeletedataComment())
                                    setwarn(false)
                                }} style={{ justifyContent: 'center', alignItems: 'center', height: 70, flex: 1 }}>
                                    <Text style={{ fontSize: 18, fontWeight: '600', textAlign: 'center', color: '#00B4D8' }}>Delete</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => [setwarn(false), setIsvisible(false)]} style={{ justifyContent: 'center', alignItems: 'center', height: 70, flex: 1 }}>
                                    <Text style={{ fontSize: 18, fontWeight: '600', textAlign: 'center', }}>Don't Delete</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <Modal visible={Isvisible} transparent={true} style={{}}>

                <TouchableWithoutFeedback style={{ flex: 1, }} onPress={() => setIsvisible(false)} onMagicTap={() => setIsvisible(false)}>

                    <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: '#40404055' }}>
                        <TouchableWithoutFeedback onPress={() => { }}>


                            {postorcomment == 'post' ? (
                                <View style={[styles.modlbawah]}>
                                    <TouchableOpacity
                                        onPress={() => setwarn(true)}
                                        style={{ flexDirection: 'row', backgroundColor: '#', width: 100, justifyContent: 'space-around' }}>
                                        {console.log(Delete)}
                                        <Image source={require('../images/trash.png')} />
                                        <Text style={{ fontSize: 16 }}>Delete</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Editpost', { username: username, password: password, item: Delete, caption: Caption })}

                                        style={{ flexDirection: 'row', backgroundColor: '#', width: 100, justifyContent: 'space-evenly' }}>
                                        <Image source={require('../images/pencil.png')} />
                                        <Text style={{ fontSize: 16, }}>Edit</Text>
                                    </TouchableOpacity>
                                </View>
                            ) : (
                                <View style={[styles.modlbawah]}>
                                    <TouchableOpacity
                                        onPress={() => setwarn(true)}
                                        style={{ flexDirection: 'row', backgroundColor: '#', width: 100, justifyContent: 'space-around' }}>
                                        {console.log(Delete)}
                                        <Image source={require('../images/trash.png')} />
                                        <Text style={{ fontSize: 16 }}>Delete</Text>
                                    </TouchableOpacity>
                                </View>
                            )}



                        </TouchableWithoutFeedback>
                    </View>

                </TouchableWithoutFeedback >

            </Modal >

            <View style={[styles.Topper, { width: windowWidth - 60 }]}>
                <Image style={{ height: 35, width: 62 }} source={require('../images/LOGO.png')} />
                <Text style={{ fontSize: 26, marginLeft: 10, color: '#00B4D8', fontWeight: '800', bottom: 4 }}>BEWD</Text>
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {console.log('note ini ada di atas flatlist')}
                    {console.log(Content)}
                    <View>
                        <View style={{ marginTop: 30 }} key={comment.post_id}>
                            {/* Posting */}
                            <View style={{
                                width: windowWidth - 60, borderBottomColor: '#B4B4B4', borderBottomWidth: 2, paddingBottom: 20
                            }} >

                                {/* header postingan  */}
                                <View style={{ backgroundColor: '#' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                        <View style={{ flexDirection: 'row', flex: 4, backgroundColor: '#' }}>
                                            <View style={[styles.Postingantop, { backgroundColor: '#', alignItems: 'flex-start', width: 55 }]}>
                                                <Image style={{ height: 45, width: 45, borderRadius: 40 }} source={require('../images/people.jpeg')} />
                                            </View>
                                            <View style={[styles.Postingantop, { backgroundColor: '#', alignItems: 'flex-start', justifyContent: 'center', flex: 1 }]}>
                                                <Text style={{ fontSize: 17, fontWeight: '600' }}>{comment.username}</Text>
                                                {/* <Text>{item.jam}</Text> */}
                                            </View>
                                        </View>
                                        {username == comment.username ? (
                                            <TouchableOpacity style={[styles.Postingantop, { backgroundColor: '#', flex: 1, alignItems: 'flex-end', justifyContent: 'flex-start', top: 3 }]}
                                                onPress={() => [setIsvisible(true), setDelete(comment.post_id), setUsername(comment.username), setPost(!Post), setpostorcomment('post'),setCaption(comment.post_caption)]}>
                                                <View style={[styles.titik3, { backgroundColor: '#' }]}>

                                                    <View>
                                                        <View style={styles.dot} />
                                                        <View style={styles.dot} />
                                                        <View style={styles.dot} />
                                                    </View>



                                                </View>
                                            </TouchableOpacity>) :
                                            (<View></View>)}
                                    </View>
                                </View>
                                {/* end header postingan  */}

                                {/* image posting  */}
                                {/* <View style={{ height: windowWidth - 60, backgroundColor: '#', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ width: windowWidth - 70, height: windowWidth - 70 }} resizeMethod='scale' source={item.images} />
                                </View> */}
                                {/* end image posting  */}

                                {/* caption postingan  */}
                                <View style={{ marginTop: 5 }}>


                                    {comment.post_caption.length > 320 ? (
                                        showMore ? ((id_post.includes(comment.post_id)) ?
                                            (
                                                (console.log(id_post)),
                                                <View style={{ backgroundColor: '#', width: windowWidth - 60 }}>
                                                    <TouchableOpacity onPress={() => setShowMore(false)} >
                                                        <Text >{comment.post_caption}</Text>
                                                        <Text style={{ color: '#404040' }}>Show less</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            ) : (
                                                <View style={{ backgroundColor: '#', width: windowWidth - 60 }}>
                                                    <TouchableOpacity onPress={() => [setShowMore(true), setid_post([...id_post, comment.post_id])]}>
                                                        <Text >
                                                            {`${comment.post_caption.slice(0, 320)}... `}
                                                        </Text>
                                                        <Text style={{ color: '#B4B4B4' }}>Show more...</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            )) : (<View style={{ backgroundColor: '#', width: windowWidth - 60 }}>
                                                <TouchableOpacity onPress={() => [setShowMore(true), setid_post([...id_post, comment.post_id])]}>
                                                    <Text >
                                                        {`${comment.post_caption.slice(0, 320)}... `}
                                                    </Text>
                                                    <Text style={{ color: '#B4B4B4' }}>Show more...</Text>
                                                </TouchableOpacity>
                                            </View>)

                                    ) : (
                                        <View style={{ backgroundColor: '#', width: windowWidth - 60 }}>
                                            <Text >
                                                {comment.post_caption}
                                            </Text>
                                        </View>
                                    )
                                    }
                                </View>

                                {/* end caption postingan  */}

                                {/* action postingan  */}
                                <View style={{ marginTop: 10, flexDirection: 'row', backgroundColor: '#', width: 140, justifyContent: 'space-between' }}>


                                    {(itemlike.includes(comment.post_id)) ?
                                        (<View style={{ backgroundColor: '#' }}>
                                            <TouchableOpacity style={styles.action} onPress={() => {

                                                var cadangan = []
                                                console.log('item.post_id')
                                                console.log(comment.post_id)
                                                for (var i = 0; i < itemlike.length; i++) {
                                                    console.log('itemlike[i]')
                                                    console.log(itemlike[i])
                                                    if (itemlike[i] != comment.post_id) {
                                                        console.log('itemlike[i]')
                                                        console.log(itemlike[i])
                                                        cadangan.push(itemlike[i])
                                                        console.log('cadangan')
                                                        console.log(cadangan)
                                                    }
                                                }
                                                setitemlike(cadangan)
                                                setid(comment.post_id)
                                                setlike(comment.like_post + 1)
                                                updateData()
                                            }}>

                                                <Image source={require('../images/love.png')} />
                                                <Text style={{ marginLeft: 8, top: 1 }}>
                                                    {comment.like_post + 1}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>) :
                                        (<View style={{ backgroundColor: '#' }}>
                                            <TouchableOpacity style={styles.action} onPress={() => {
                                                setitemlike([...itemlike, comment.post_id])
                                                console.log(itemlike)
                                                setid(comment.post_id)
                                                setlike(comment.like_post)
                                                setid(comment.post_id)
                                                setlike(comment.like_post)
                                                updateData()


                                            }}>

                                                <Image source={require('../images/like.png')} />
                                                <Text style={{ marginLeft: 8, top: 1 }}>
                                                    {comment.like_post}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>)
                                    }
                                    <TouchableOpacity style={[styles.action, { marginLeft: 10 }]}

                                    >
                                        <Image source={require('../images/coment.png')} />
                                        <Text style={{ marginLeft: 8, top: 1 }}>
                                            {comment.total_comments}
                                        </Text>
                                    </TouchableOpacity>

                                </View>
                                {/* end action postingan  */}

                            </View>
                            {/* end Posting*/}
                        </View>
                        <View style={{ backgroundColor: '#', height: 40, justifyContent: 'center', borderBottomColor: '#b4b4b4', borderTopColor: '#b4b4b4b4', borderBottomWidth: 2 }}>
                            <Text>{comment.time_post}</Text>
                        </View>
                    </View>

                    {/* isi comment */}
                    {data.map(item => {
                        return (
                            <View key={item.comment_id}>
                                {console.log(item.comment_id)}
                                <View style={{ marginTop: 30 }}>
                                    {/* Posting */}
                                    <View style={{
                                        width: windowWidth - 60, borderBottomColor: '#B4B4B4', borderBottomWidth: 2, paddingBottom: 20
                                    }} >

                                        {/* header postingan  */}
                                        <View style={{ backgroundColor: '#' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                                <View style={{ flexDirection: 'row', flex: 4, backgroundColor: '#' }}>
                                                    <View style={[styles.Postingantop, { backgroundColor: '#', alignItems: 'flex-start', width: 55 }]}>
                                                        <Image style={{ height: 45, width: 45, borderRadius: 40 }} source={require('../images/people.jpeg')} />
                                                    </View>
                                                    <View style={[styles.Postingantop, { backgroundColor: '#', alignItems: 'flex-start', justifyContent: 'center', flex: 1 }]}>
                                                        <Text style={{ fontSize: 17, fontWeight: '600' }}>{item.username}</Text>
                                                        {/* <Text>{item.jam}</Text> */}
                                                    </View>
                                                </View>
                                                {username == item.username ? (<TouchableOpacity style={[styles.Postingantop, { backgroundColor: '#', flex: 1, alignItems: 'flex-end', justifyContent: 'flex-start', top: 3 }]}
                                                    onPress={() => [setIsvisible(true), setDelete(item.comment_id), setUsername(item.username), setpostorcomment('comment')]}>
                                                    <View style={[styles.titik3, { backgroundColor: '#' }]}>

                                                        <View style={styles.dot} />
                                                        <View style={styles.dot} />
                                                        <View style={styles.dot} />


                                                    </View>
                                                </TouchableOpacity>) : (
                                                    <View></View>
                                                )}

                                            </View>
                                        </View>
                                        {/* end header postingan  */}

                                        {/* image posting  */}
                                        {/* <View style={{ height: windowWidth - 60, backgroundColor: '#', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ width: windowWidth - 70, height: windowWidth - 70 }} resizeMethod='scale' source={item.images} />
                                </View> */}
                                        {/* end image posting  */}

                                        {/* caption postingan  */}
                                        <View style={{ marginTop: 5 }}>


                                            {item.comment_caption.length > 320 ? (
                                                showMore ? ((id_post.includes(item.comment_id)) ?
                                                    (
                                                        (console.log(id_post)),
                                                        <View style={{ backgroundColor: '#', width: windowWidth - 60 }}>
                                                            <TouchableOpacity onPress={() => setShowMore(false)} >
                                                                <Text >{item.comment_caption}</Text>
                                                                <Text style={{ color: '#404040' }}>Show less</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                    ) : (
                                                        <View style={{ backgroundColor: '#', width: windowWidth - 60 }}>
                                                            <TouchableOpacity onPress={() => [setShowMore(true), setid_post([...id_post, item.comment_id])]}>
                                                                <Text >
                                                                    {`${item.comment_caption.slice(0, 320)}... `}
                                                                </Text>
                                                                <Text style={{ color: '#B4B4B4' }}>Show more...</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                    )) : (<View style={{ backgroundColor: '#', width: windowWidth - 60 }}>
                                                        <TouchableOpacity onPress={() => [setShowMore(true), setid_post([...id_post, item.comment_id])]}>
                                                            <Text >
                                                                {`${item.comment_caption.slice(0, 320)}... `}
                                                            </Text>
                                                            <Text style={{ color: '#B4B4B4' }}>Show more...</Text>
                                                        </TouchableOpacity>
                                                    </View>)

                                            ) : (
                                                <View style={{ backgroundColor: '#', width: windowWidth - 60 }}>
                                                    <Text >
                                                        {item.comment_caption}
                                                    </Text>
                                                </View>
                                            )
                                            }
                                        </View>

                                        {/* end caption postingan  */}

                                        {/* action postingan  */}
                                        <View style={{ marginTop: 10, flexDirection: 'row', backgroundColor: '#', width: 140, justifyContent: 'space-between' }}>


                                            {(itemlike.includes(item.comment_id)) ?
                                                (<View style={{ backgroundColor: '#' }}>
                                                    <TouchableOpacity style={styles.action} onPress={() => {

                                                        var cadangan = []
                                                        console.log('item.comment_id')
                                                        console.log(item.comment_id)
                                                        for (var i = 0; i < itemlike.length; i++) {
                                                            console.log('itemlike[i]')
                                                            console.log(itemlike[i])
                                                            if (itemlike[i] != item.comment_id) {
                                                                console.log('itemlike[i]')
                                                                console.log(itemlike[i])
                                                                cadangan.push(itemlike[i])
                                                                console.log('cadangan')
                                                                console.log(cadangan)
                                                            }
                                                        }
                                                        setitemlike(cadangan)
                                                        setid(item.comment_id)
                                                        setlike(item.like_comment + 1)
                                                        updateData()
                                                    }}>

                                                        <Image source={require('../images/love.png')} />
                                                        <Text style={{ marginLeft: 8, top: 1 }}>
                                                            {item.like_comment + 1}
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>) :
                                                (<View style={{ backgroundColor: '#' }}>
                                                    <TouchableOpacity style={styles.action} onPress={() => {
                                                        setitemlike([...itemlike, item.comment_id])
                                                        console.log(itemlike)
                                                        setid(item.comment_id)
                                                        setlike(item.like_comment)
                                                        setid(item.comment_id)
                                                        setlike(item.like_comment)
                                                        updateData()


                                                    }}>

                                                        <Image source={require('../images/like.png')} />
                                                        <Text style={{ marginLeft: 8, top: 1 }}>
                                                            {item.like_comment}
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>)
                                            }
                                        </View>
                                        {/* end action postingan  */}

                                    </View>
                                    {/* end Posting*/}
                                </View>

                            </View>
                        )
                    })}
                    {/* akhir comment */}
                </ScrollView>
            </View >


            <View style={{ justifyContent: 'flex-end', backgroundColor: '#' }}>
                <View style={{ backgroundColor: '#', height: 80, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TextInput
                        value={isicomment}
                        placeholder='Comment'
                        onChangeText={(item) => setisicomment(item)}
                        style={{ width: 300, height: 50, backgroundColor: '#eeeeee', borderRadius: 40, paddingLeft: 20 }} />
                    <View style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => uploadComment()}>
                            <Image style={{ height: 30, width: 30 }} source={require('../images/send.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


        </View >


    )

}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fefefe',
        alignItems: 'center'
    },
    Topper: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 100,
        backgroundColor: '',
        borderBottomColor: '#B4B4B4',
        borderBottomWidth: 2,

    },

    Postingantop: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 58
    },
    dot: {
        height: 1,
        width: 1,
        backgroundColor: '#404040',
        borderColor: '#454545',
        borderWidth: 2,
        borderRadius: 5,
        margin: 2,
        top: 5
    },
    action: {
        flexDirection: 'row',
        flex: 1,

    },
    textModal: {
        fontSize: 15
    },
    boxmodal: {
        shadowColor: '#0D82BD',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 10,
        width: 73,
        height: 90,
        paddingLeft: 20,
        backgroundColor: '#fefefe',
        justifyContent: 'space-evenly',
        borderRadius: 10,
    },
    titik3: {
        backgroundColor: '#',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        height: 30

    },
    modlbawah: {
        width: windowWidth,
        backgroundColor: '#fefefe',
        height: 120,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        shadowRadius: 10,
        shadowOpacity: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        borderColor: '#0D82BD'
    }

})
