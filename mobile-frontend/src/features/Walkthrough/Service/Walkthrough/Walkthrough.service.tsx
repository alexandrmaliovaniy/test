import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const WalkthroughService = () => {
    const navigate = useNavigate();
    const [data] = useState([
        {
            image: "https://images.unsplash.com/photo-1503919275948-1f118d8ecf0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGx1bWF8ZW58MHx8MHx8&w=1000&q=80",
            title: "Read interesting articles every single day!",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."
        },
        {
            image: "https://images.unsplash.com/photo-1503919275948-1f118d8ecf0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGx1bWF8ZW58MHx8MHx8&w=1000&q=80",
            title: "Title2",
            content: "content"
        },
        {
            image: "https://images.unsplash.com/photo-1503919275948-1f118d8ecf0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGx1bWF8ZW58MHx8MHx8&w=1000&q=80",
            title: "Title3",
            content: "content"
        }
    ]);
    const [currentPage, setCurrentPage] = useState(0);

    const skip = () => {
        navigate('/landing/auth')
    }
    const nextPage = () => {
        if (currentPage === data.length - 1) return skip();
        setCurrentPage(currentPage + 1);
    }

    return {
        nextPage,
        skip,
        page: currentPage,
        length: data.length,
        data: data[currentPage]
    }

};

export default WalkthroughService;