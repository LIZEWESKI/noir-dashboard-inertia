<?php

namespace App\Traits;

trait MustBeAdmin
{
    /**
     * Determine if the user has admin role.
     *
     * @return bool
     */
    public function hasAdminRole()
    {
        return $this->role === "admin";
    }
}
