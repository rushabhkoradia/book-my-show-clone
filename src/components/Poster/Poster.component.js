import React from 'react';

// props --> title, subtitle, isDark(bool)

const Poster = (props) => {
    return (
        <>
            <div className="flex flex-col items-start gap-2">
                <div className="h-80">
                    <img src={ props.src } alt={ props.title } className="w-full h-full rounded-md" />
                </div>

                <h4 className={ `text-lg font-bold ${props.isDark? "text-white" : "text-gray-700"}` }>
                    { props.title }
                </h4>
                
                <p className={ `text-sm font-bold ${props.isDark? "text-white" : "text-gray-700"}` }>
                    { props.subtitle }
                </p>
            </div>   
        </>
    );
};

export default Poster;