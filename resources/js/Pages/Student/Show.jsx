import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from "@inertiajs/react";

export default function Show({ auth, student }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Student</h2>}
        >
            <Head title="Student" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className='justify-center items-centerh-screen flex items-center justify-center'>
                            <img
                                src={student.image}
                                alt=""
                                className="p-2 w-40 h-40 rounded-full "
                            />
                        </div>
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="grid gap-1 grid-cols-2 mt-2">
                                <div>
                                    <div>
                                        <p className="mt-1 font-bold text-lg">
                                            Student ID : {student.id}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <p className="mt-1 font-bold text-lg">
                                            Student Name : {student.name}
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <p className="mt-1 font-bold text-lg">
                                            Student Status :{student.status}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <p className="font-bold text-lg mt-1">
                                            Age : {student.age}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </AuthenticatedLayout>
    );
}
