/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Link from '@docusaurus/Link'
import { useActivePlugin, useLatestVersion, } from '@theme/hooks/useDocs'
import { getVersion } from '../GetVersion'

const router_1 = require('@docusaurus/router')

const doesHaveMatchingLatestDocs = (version, matchPath) => {
  return version.docs.find((doc) => doc.path === matchPath) !== undefined
}

const useMandatoryActiveDocsPluginId = () => {
  const activePlugin = useActivePlugin()
  if (!activePlugin) {
    throw new Error(
      'DocVersionCallout is only supposed to be used on docs-related routes',
    )
  }
  return activePlugin.pluginId
}

function DocVersionSuggestions () {
  const {
    siteConfig: {
      themeConfig: {
        latestVersion,
        versionNotices,
      }
    },
  } = useDocusaurusContext()
  const pluginId = useMandatoryActiveDocsPluginId()
  const version = useLatestVersion(pluginId)
  let currentVersion = getVersion()
  const { pathname } = router_1.useLocation()

  // If not on documentation pages, display nothing
  if (!currentVersion) {
    return <></>
  }

  currentVersion = currentVersion[1]

  // Only display the badge if no notice defined
  if (!versionNotices[currentVersion]) {
    return (
      <span className="badge badge--secondary">
          Version: {currentVersion}
        </span>
    )
  }

  // display notice, link to latest documentation, and badge all together
  let jumpToHtml = ''
  if (currentVersion[1] < latestVersion[1]) {
    const newPathname = pathname.replace('/' + currentVersion + '/', '/' + latestVersion + '/')
    if (doesHaveMatchingLatestDocs(version, newPathname)) {
      jumpToHtml = <Link to={newPathname}>Go to the current documentation</Link>
    }
  }

  return (
    <div>
      <div
        // Developer provided the HTML, so assume it's safe.
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: versionNotices[currentVersion],
        }}
      />
      {jumpToHtml &&
      <div className="alert alert--info margin-bottom--md" role="alert">
        &#x2139; {jumpToHtml}
      </div>
      }

      <span className="badge badge--secondary">
          Version: {currentVersion.substring(1)}
        </span>
    </div>
  )
}

export default DocVersionSuggestions
