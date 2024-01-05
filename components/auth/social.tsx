"use client"

import {FcGoogle} from 'react-icons/fc'
import {FaGithub} from 'react-icons/fa'
import { Button } from '../ui/button'

export const Social = () => {
    return ( 
        <div className='w-full flex justify-between'>
            <Button 
                size="lg" 
                className='w-full' 
                variant="outline"
                onClick={() => {}}
            >      
                <FcGoogle />
            </Button>
            <Button 
                size="lg" 
                className='w-full' 
                variant="outline"
                onClick={() => {}}
            >
                <FaGithub />
            </Button>
        </div>
     );
}
 